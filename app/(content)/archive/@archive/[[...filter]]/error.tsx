"use client";

function FilterError({ error }: Props) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
export default FilterError;

type Props = {
  error: { message: string };
};
