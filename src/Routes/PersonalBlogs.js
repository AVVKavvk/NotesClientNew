import React from "react";

function PersonalBlogs() {
  return (
    <>
      <div className="mt-4 font-mullish px-6 mb-10 flex flex-col gap-y-7 items-center   mx-auto max-w-[1300px]">
        <h1 className="md:text-3xl text-xl font-bold">Personal Development Blogs</h1>
        <div className="flex md:flex-row flex-col gap-24 flex-div justify-between  items-center mx-auto max-w-[100%]">
          <div className=" flex flex-col hover:scale-110 transition-all duration-500 justify-start items-center mx-auto max-w-[600px]">
            <div className="">
              <img
                variant="top"
                src="https://i.ibb.co/0h9nVhV/istockphoto-872323824-1024x1024.jpg"
                alt="Mental Health"
                width="550px"
              />
              <div>
                <h1 className=" font-bold text-xl">Personal Growth</h1>
                <p>
                  Personal growth, also known as personal development or
                  self-improvement, is the process of developing and enhancing
                  your skills, knowledge, and abilities to become a better
                  version of yourself.
                </p>
                <p>
                  <strong>
                    {" "}
                    Invest in your personal growth journey. Explore
                    self-improvement, mindset, and personal development
                    strategies to become the best version of yourself.
                  </strong>
                  <ul className=" list-disc">
                    <li>
                      Cultivate a growth mindset and embrace challenges as
                      opportunities for learning.
                    </li>
                    <li>
                      Read self-help books and seek knowledge to expand your
                      horizons.
                    </li>
                    <li>
                      Set personal development goals and track your progress
                      regularly.
                    </li>
                    <li>
                      Connect with mentors or coaches to guide your personal
                      growth journey.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col hover:scale-110 transition-all duration-500 justify-start items-center mx-auto max-w-[600px]">
            <div className="">
              <img
                variant="top"
                src="https://i.ibb.co/bz5V4jh/istockphoto-1199010148-1024x1024.jpg"
                alt="Coding"
                width="550px"
              />
              <div>
                <h1 className=" font-bold text-xl">Productivity</h1>
                <p>
                  Productivity is a measure of how efficiently you use your time
                  and resources to achieve your goals and complete tasks.
                </p>
                <p>
                  <strong>
                    Boost your productivity levels by mastering time management,
                    setting clear goals, and using productivity tools and
                    techniques.
                  </strong>
                  <ul className=" list-disc">
                    <li>
                      Define specific, achievable goals for what you want to
                      accomplish.
                    </li>
                    <li>
                      Use methods like the Eisenhower Matrix to categorize tasks
                      into urgent/important, important/not urgent, urgent/not
                      important, and neither.
                    </li>
                    <li>
                      Practice regular breaks and relaxation to avoid burnout.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row  flex-col gap-24 flex-div justify-between  items-center mx-auto max-w-[100%]">
          <div className=" flex flex-col hover:scale-110 transition-all duration-500 justify-start items-center mx-auto max-w-[600px]">
            <div className="">
              <img
                variant="top"
                src="https://i.ibb.co/8dS5CVL/istockphoto-608627018-1024x1024.jpg"
                alt="Well-Being"
                width="550px"
              />
              <div>
                <h1 className=" font-bold text-xl">Leadership</h1>
                <p>
                  Leadership is the ability to guide, inspire, and influence
                  individuals or groups to achieve a common goal or vision.
                  Effective leadership involves a range of skills and qualities
                  that enable a person to lead and manage others successfully.
                </p>
                <p>
                  <strong>
                    {" "}
                    Develop your leadership skills and become an effective
                    leader. Learn about communication, team building, and
                    decision-making .
                  </strong>
                  <ul className=" list-disc">
                    <li>Lead by example and demonstrate integrity.</li>
                    <li>
                      Build a strong and motivated team through effective
                      communication.
                    </li>
                    <li>
                      Develop a leadership style that suits your personality and
                      the needs of your team.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col hover:scale-110 transition-all duration-500 justify-start items-center mx-auto max-w-[600px]">
            <div className="">
              <img
                variant="top"
                src="https://i.ibb.co/m8CPGpT/istockphoto-1072859540-1024x1024.jpg"
                alt="Positivity"
                width="550px"
              />
              <div>
                <h1 className=" font-bold text-xl">Time Management</h1>
                <p>
                  A positive mindset can foster innovation and make coding more
                  enjoyable. Time management is the practice of planning and
                  organizing how you allocate your time to various tasks and
                  activities to be more productive, efficient, and effective.
                </p>
                <p>
                  <strong>
                    {" "}
                    Learn to manage your time effectively and prioritize tasks
                    to achieve your goals. Explore techniques such as goal
                    setting, planning, and overcoming procrastination.
                  </strong>
                  <ul className=" list-disc">
                    <li>Create a daily to-do list with clear priorities.</li>
                    <li>
                      Use the Pomodoro Technique for focused work intervals.
                    </li>
                    <li>Avoid multitasking to improve concentration.</li>
                    <li>Learn to say no to time-wasting activities.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalBlogs;
