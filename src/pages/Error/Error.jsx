import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center shadow-custom gap-5 h-screen p-16 bg-white-300 text-gray-900">
      <div>
        <img
          src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/ce35614480247e178703e99048a7e724.gif"
          alt=""
          className="rounded-sm"
        />
      </div>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 border p-5 shadow-custom">
        <div className="max-w-md text-center relative">
          <p className="font-bold text-3xl pt-5">Looks like we lost our way.</p>
          <h2 className="mb-8 font-extrabold text-9xl text-primary">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-3xl font-extrabold md:text-3xl mb-8 text-red-700">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-slate-500 text-white absolute -top-12 left-1/3"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
