import profileImage from './images/profile.jpg'
  
  export default function FitnessAbout() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 xl:grid-cols-2">
            {/* Column for text */}
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Welcome to Fitness Focus!</h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Hey! I'm Justin Palathunkal, the developer of Fitness Focus. I'm a 4th Year Computer Engineering Student at the University of Waterloo.
                I've always enjoyed fitness and sports growing up and created this application aimed at wanting to share my expertise in this subject and my favourite workouts.
                There's soon to be more features to be added and more information to help guide you in the world of fitness. Have a great workout!
                
              </p>
            </div>
            <ul role="list" className="space-y-12">
                <li>
                    <div className="flex items-center gap-x-8">
                    <img alt="" src={profileImage} className="h-70 w-70 rounded-full" />
                    </div>
                </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  