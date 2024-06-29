document.addEventListener("DOMContentLoaded", function () {
    const addKeyframeBtn = document.getElementById("add-keyframe");
    const keyframesContainer = document.getElementById("keyframes-container");
    const generatedCssTextArea = document.getElementById("generated-css");
    const animatedObject = document.getElementById("animated-object");
    const copyCssBtn = document.getElementById("copy-css");

    addKeyframeBtn.addEventListener("click", addKeyframe);

    function addKeyframe() {
        const keyframeDiv = document.createElement("div");
        keyframeDiv.classList.add("keyframe");

        keyframeDiv.innerHTML = `
            <label>Time (%):</label>
            <input type="text" class="keyframe-time" placeholder="e.g., 0, 50, 100">
            <label>Property:</label>
            <select class="keyframe-property">
                <option value="transform">transform</option>
                <option value="opacity">opacity</option>
                <option value="background-color">background-color</option>
                <option value="color">color</option>
            </select>
            <label>Value:</label>
            <input type="text" class="keyframe-value" placeholder="Enter value">
        `;

        keyframesContainer.appendChild(keyframeDiv);
    }

    function generateCss() {
        const animationName = document.getElementById("animation-name").value;
        const animationDuration = document.getElementById("animation-duration").value;
        const animationTimingFunction = document.getElementById("animation-timing-function").value;
        const animationIterationCount = document.getElementById("animation-iteration-count").value;
        const animationDirection = document.getElementById("animation-direction").value;
        const animationFillMode = document.getElementById("animation-fill-mode").value;

        let keyframesCss = `@keyframes ${animationName} {\n`;

        document.querySelectorAll(".keyframe").forEach(keyframe => {
            const time = keyframe.querySelector(".keyframe-time").value;
            const property = keyframe.querySelector(".keyframe-property").value;
            const value = keyframe.querySelector(".keyframe-value").value;

            keyframesCss += `  ${time}% {\n    ${property}: ${value};\n  }\n`;
        });

        keyframesCss += `}`;

        const animationCss = `
            ${animatedObject.className} {
                animation-name: ${animationName};
                animation-duration: ${animationDuration}s;
                animation-timing-function: ${animationTimingFunction};
                animation-iteration-count: ${animationIterationCount == "0" ? "infinite" : animationIterationCount};
                animation-direction: ${animationDirection};
                animation-fill-mode: ${animationFillMode};
            }
        `;

        generatedCssTextArea.value = keyframesCss + animationCss;

        applyAnimation(animationName, animationDuration, animationTimingFunction, animationIterationCount, animationDirection, animationFillMode, keyframesCss);
    }

    function applyAnimation(name, duration, timingFunction, iterationCount, direction, fillMode, keyframes) {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes + `
            .animated-object {
                animation-name: ${name};
                animation-duration: ${duration}s;
                animation-timing-function: ${timingFunction};
                animation-iteration-count: ${iterationCount == "0" ? "infinite" : iterationCount};
                animation-direction: ${direction};
                animation-fill-mode: ${fillMode};
            }
        `;
        document.head.appendChild(styleSheet);
    }

    document.querySelectorAll("input, select").forEach(input => {
        input.addEventListener("input", generateCss);
    });

    keyframesContainer.addEventListener("input", generateCss);

    copyCssBtn.addEventListener("click", () => {
        generatedCssTextArea.select();
        document.execCommand("copy");
    });
});