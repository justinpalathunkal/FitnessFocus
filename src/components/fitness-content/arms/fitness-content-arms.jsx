import BicepCurlModel from './fitness-ar-arms';
import ForearmModel from './fitness-ar-forearm';

const workouts = [
  { name: 'Dumbbell Curls', description: 'Grab a dumbbell and slowly curl the weight upwards and downwards while aiming to keep your elbows tucked in, increasing the focus on your bicep. SUGGESTION: 8 - 10 reps for 3 sets. ALTERNATIVES: Cable Curls, EZ Bar Curls' },
  { name: 'EZ Bar Curls', description: 'Grab a dumbbell and slowly curl the weight upwards and downwards while aiming to keep your elbows tucked in, increasing the focus on your bicep. SUGGESTION: 8 - 10 reps for 3 sets. ALTERNATIVES: Cable Curls, EZ Bar Curls' },
  { name: 'Hammer Curls', description: 'Grab a dumbbell and slowly curl the weight upwards and downwards while aiming to keep your elbows tucked in, increasing the focus on your bicep. SUGGESTION: 8 - 10 reps for 3 sets. ALTERNATIVES: Cable Curls, EZ Bar Curls' },
  { name: 'Cable Curls', description: 'Grab a dumbbell and slowly curl the weight upwards and downwards while aiming to keep your elbows tucked in, increasing the focus on your bicep. SUGGESTION: 8 - 10 reps for 3 sets. ALTERNATIVES: Cable Curls, EZ Bar Curls' },
  { name: 'Forearm Curls', description: 'Grab a dumbbell and slowly curl the weight upwards and downwards while aiming to keep your elbows tucked in, increasing the focus on your bicep. SUGGESTION: 8 - 10 reps for 3 sets. ALTERNATIVES: Cable Curls, EZ Bar Curls' },
  { name: 'Reverse Curls', description: 'Grab a dumbbell and slowly curl the weight upwards and downwards while aiming to keep your elbows tucked in, increasing the focus on your bicep. SUGGESTION: 8 - 10 reps for 3 sets. ALTERNATIVES: Cable Curls, EZ Bar Curls' },
];

export default function FitnessArmsContent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Arm Workout Guide</h2>
          <p className="mt-4 text-gray-500">
            This guide is meant to aid you in targeting your arms and helping with developing both strength and growth. For in-depth info click <a href="https://fitnessprogramer.com/exercise-primary-muscle/biceps/"> <span className='text-blue-300'>Here</span></a>
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {workouts.map((workout) => (
              <div key={workout.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{workout.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{workout.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Dumbbell curls"
            src={require('./images/Dumbbell-Curl.gif')}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Z Bar Preacher Curl"
            src={require('./images/Z-Bar-Preacher-Curl.gif')}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Hammer Curls"
            src={require('./images/Hammer-Curl.gif')}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="One Arm Cable Curl"
            src={require('./images/One-Arm-Cable-Curl.gif')}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Forarm Curls"
            src={require('./images/Cable-One-Arm-Wrist-Curl-On-Floor.gif')}
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Reverse Curls"
            src={require('./images/dumbbell-reverse-curl.gif')}
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-4 gap-4 sm:gap-6 lg:gap-8">
        <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-1xl">AR Arm Models</h3>
          <p className="text-2xl text-gray-500 mb-5">
            Here is an AR model to aid you in further understanding the focus of working out biceps
          </p>
          
        </div>

      <BicepCurlModel />
      <p className="text-2xl text-gray-500 mt-10">
            Here is a model to aid you in further understanding the muscles being targeted for the forearms
          </p>
          
      <ForearmModel />
      </div>
      
    </div>
  );
}
