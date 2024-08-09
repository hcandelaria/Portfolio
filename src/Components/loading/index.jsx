const Loading = () => {
  return (
    <div
      id="loading-component"
      className="flex items-center justify-center space-x-2"
      role="status"
    >
      <div className="grid min-h-screen place-content-center">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="block h-6 w-6 animate-spin rounded-full border-4 border-t-sky-500"></span>
          loading...
        </div>
      </div>
    </div>
  );
};
export default Loading;
