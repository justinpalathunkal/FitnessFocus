package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"golang.org/x/crypto/bcrypt"
	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	ID             int    `json:"id"`
	Email          string `json:"email"`
	Password       string `json:"password,omitempty"`
	HashedPassword string `json:"-"`                 
}

var db *sql.DB
var err error

func enableCors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // Allow all origins, can restrict this later
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func hashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func checkPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func saveUser(email, hashedPassword string) (int64, error) {
	stmt, err := db.Prepare("INSERT INTO users(email, password_hash) VALUES(?, ?)")
	if err != nil {
		return 0, err
	}
	defer stmt.Close()

	result, err := stmt.Exec(email, hashedPassword)
	if err != nil {
		return 0, err
	}

	return result.LastInsertId()
}

func getUserByEmail(email string) (*User, error) {
	var user User
	err := db.QueryRow("SELECT id, password_hash FROM users WHERE email = ?", email).Scan(&user.ID, &user.HashedPassword)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func handleSignUp(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Error decoding request body", http.StatusBadRequest)
		return
	}

	hashedPassword, err := hashPassword(user.Password)
	if err != nil {
		http.Error(w, "Error hashing password", http.StatusInternalServerError)
		return
	}

	userID, err := saveUser(user.Email, hashedPassword)
	if err != nil {
		http.Error(w, "Error saving user", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"message": "User registered successfully",
		"user_id": userID,
	})
}

func handleSignIn(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Error decoding request body", http.StatusBadRequest)
		return
	}

	storedUser, err := getUserByEmail(user.Email)
	if err != nil {
		http.Error(w, "User not found", http.StatusUnauthorized)
		return
	}

	if !checkPasswordHash(user.Password, storedUser.HashedPassword) {
		http.Error(w, "Invalid password", http.StatusUnauthorized)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"message":  "Sign-in successful",
		"user_id":  storedUser.ID,
	})
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}

	return fallback
}

func main() {
	dbUser := getEnv("DB_USER", "root")
	dbPassword := getEnv("DB_PASSWORD", "password")

	dsn := fmt.Sprintf("%s:%s@tcp(127.0.0.1:3306)/fitnessfocus", dbUser, dbPassword)
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	http.Handle("/signup", enableCors(http.HandlerFunc(handleSignUp)))
	http.Handle("/signin", enableCors(http.HandlerFunc(handleSignIn)))

	fmt.Println("Server is listening on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
