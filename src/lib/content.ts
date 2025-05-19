/*

<div className="card example-5">
  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    <rect
      rx="8"
      ry="8"
      class="line"
      height="100%"
      width="100%"
      stroke-linejoin="round"
    />
  </svg>
  <div className="inner">
    <h3>Example 5</h3>
    <p>This card uses SVG for the animation effect.</p>
  </div>
</div>


.example-5 {
  position: relative;
}

.example-5 svg {
  position: absolute;
}

.example-5 .line {
  stroke-dasharray: 260;
  stroke-width: 1px;
  fill: transparent;
  stroke: rgba(78, 255, 13, 0.3);
  animation: svgAnimation 2.5s linear infinite;
}

@keyframes svgAnimation {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1000;
  }
}

*/