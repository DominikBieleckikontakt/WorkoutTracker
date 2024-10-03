import React from "react";

const Statscard = () => {
  return (
    <div className="mx-5 lg:mx-10 flex justify-center mb-16">
      <div className="w-full max-w-[1700px] bg-primary shadow-md rounded-lg flex flex-col items-center sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-10 p-8 px-10 text-background">
        <div>
          <p className="text-sm">Workouts Completed</p>
          <h3 className="text-4xl mt-1 font-semibold">10,000+</h3>
          <p className="text-sm mt-5 md:max-w-64 font-light">
            Helping users reach their fitness goals faster with over 10,000
            completed workouts in our platform.
          </p>
        </div>
        <div>
          <p className="text-sm">User Satisfaction</p>
          <h3 className="text-4xl mt-1 font-semibold">95%</h3>
          <p className="text-sm mt-5 md:max-w-64 font-light">
            95% of our users report increased motivation and better fitness
            tracking since joining the platform.
          </p>
        </div>
        <div className="max-sm:w-full">
          <p className="text-sm">Users Tracked</p>
          <h3 className="text-4xl mt-1 font-semibold">5,000+</h3>
          <p className="text-sm mt-5 md:max-w-64 font-light">
            Join 5,000+ active users tracking their daily fitness, nutrition and
            progress with ease.
          </p>
        </div>
        <div>
          <p className="text-sm">Trainers registered</p>
          <h3 className="text-4xl mt-1 font-semibold">200+</h3>
          <p className="text-sm mt-5 md:max-w-64 font-light">
            Connect with 200+ certified trainers available to guide you through
            custom workout programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statscard;
