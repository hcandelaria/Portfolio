const Pill = (props) => {
  return (
    <div
      className={`px-1 m-1 inline-block shadow-md no-underline rounded-full bg-${props.bg} text-white border-${props.bg} btn-primary text-md sm:text-sm`}
    >
      {props.tech}
    </div>
  );
};

export default Pill;
