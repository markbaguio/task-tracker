const NoTask = ({ color, alignment }) => {
  return (
    <div>
      <h3 style={{ color: color, textAlign: alignment }}>
        No task to do. Great Job, relax for a bit.
      </h3>
    </div>
  );
};

export default NoTask;

NoTask.defaultProps = {
  color: "gray",
  alignment: "center",
};
