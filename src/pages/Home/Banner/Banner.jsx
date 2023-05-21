import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="h-[500px] lg:h-96">
      <Carousel indicators={false}>
        <div className="flex flex-col lg:flex-row h-full items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full">
              <div className="bg-slate-200">
                <img src="https://img.freepik.com/premium-psd/ludo-board-mockup-top-view_1332-9603.jpg?w=740"  alt="" className="h-64 lg:h-full w-full" />
              </div>
            </div>
            <div className="w-full text-center px-5">
              <div className="bg-slate-300 rounded p-5 w-60 text-center font-bold relative mx-auto">
                <h3 className="font-bold">Beautiful toys</h3>
                <div className="bg-indigo-500 text-white font-semibold py-1 px-2 rounded-tl-md rounded-bl-md absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
                  New!
                </div>
              </div>
              <h3 className="text-indigo-700 text-3xl font-bold pt-5">Latest Collections</h3>
              <p className="text-gray-400">
                Engage your mind with our captivating puzzled toy collection.
                Explore intricate designs and challenge your problem-solving
                skills. Experience endless hours of entertainment and mental
                stimulation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full">
              <div className="bg-slate-200">
                <img src="https://img.freepik.com/free-vector/game-template-with-children-school-objects_1308-73218.jpg?w=740&t=st=1684392820~exp=1684393420~hmac=bf2b5b665dbe797786e677d68d062e177043afe93be7e75ce5059207ffaaf075"  alt=""  className="h-64 lg:h-full w-full"/>
              </div>
            </div>
            <div className="w-full text-center px-5">
              <div className="bg-slate-300 rounded p-5 w-60 text-center font-bold relative mx-auto">
                <h3 className="font-bold">Beautiful toys</h3>
                <div className="bg-indigo-500 text-white font-semibold py-1 px-2 rounded-tl-md rounded-bl-md absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
                  New!
                </div>
              </div>
              <h3 className="text-indigo-700 text-3xl font-bold pt-5">Latest Collections</h3>
              <p className="text-gray-400">
                Engage your mind with our captivating puzzled toy collection.
                Explore intricate designs and challenge your problem-solving
                skills. Experience endless hours of entertainment and mental
                stimulation.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-slate-200 dark:bg-gray-700 dark:text-white">
          <div className="flex flex-col lg:flex-row  justify-between items-center">
            <div className="w-full">
              <div className="bg-slate-200">
                <img src="https://img.freepik.com/premium-vector/school-kids-photo-jigsaw-puzzle-game_1639-43438.jpg?w=740"  alt="" className="h-64 lg:h-full w-full"/>
              </div>
            </div>
            <div className="w-full text-center px-5">
              <div className="bg-slate-300 rounded p-5 w-60 text-center font-bold relative mx-auto">
                <h3 className="font-bold">Beautiful toys</h3>
                <div className="bg-indigo-500 text-white font-semibold py-1 px-2 rounded-tl-md rounded-bl-md absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
                  New!
                </div>
              </div>
              <h3 className="text-indigo-700 text-3xl font-bold pt-5">Latest Collections</h3>
              <p className="text-gray-400">
                Engage your mind with our captivating puzzled toy collection.
                Explore intricate designs and challenge your problem-solving
                skills. Experience endless hours of entertainment and mental
                stimulation.
              </p>
            </div>
          </div>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
