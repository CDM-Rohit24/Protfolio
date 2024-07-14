import React from "react";

import './Spinner.css'

function Spinner() {
  return (
    <>
      <div className="h-72 w-80 items-center justify-center mx-auto">
        <div class="page">
          <div class="loadContainer">
            <div class="loadInner">
              <div class="loadCircle">
                <div class="loadCircleInner"></div>
              </div>
              <div class="loadCircle">
                <div class="loadCircleInner"></div>
              </div>
              <div class="loadCircle">
                <div class="loadCircleInner"></div>
              </div>
              <div class="loadCircle">
                <div class="loadCircleInner"></div>
              </div>
              <div class="loadCircle">
                <div class="loadCircleInner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Spinner;