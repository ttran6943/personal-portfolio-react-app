import React from "react";

function linkedButton(url, text) {
  return (
    <button
      onClick={
        (Event = () =>
          window.open(
            `${url}`
          ))
      }
      type="button"
      class="btn btn-secondary"
    >
      {`${text}`}
    </button>
  );
}

export default linkedButton;
