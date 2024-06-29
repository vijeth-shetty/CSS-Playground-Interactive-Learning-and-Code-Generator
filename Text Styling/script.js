document.addEventListener("DOMContentLoaded", function () {
    const preview = document.getElementById("preview");
    const textInput = document.getElementById("text-input");
    const fontFamily = document.getElementById("font-family");
    const fontSize = document.getElementById("font-size");
    const fontWeight = document.getElementById("font-weight");
    const fontStyle = document.getElementById("font-style");
    const fontVariant = document.getElementById("font-variant");
    const lineHeight = document.getElementById("line-height");
    const textColor = document.getElementById("text-color");
    const textAlign = document.getElementById("text-align");
    const textDecoration = document.getElementById("text-decoration");
    const letterSpacing = document.getElementById("letter-spacing");
    const wordSpacing = document.getElementById("word-spacing");
    const textIndent = document.getElementById("text-indent");
    const textTransform = document.getElementById("text-transform");
    const textShadowH = document.getElementById("text-shadow-h");
    const textShadowV = document.getElementById("text-shadow-v");
    const textShadowBlur = document.getElementById("text-shadow-blur");
    const textShadowColor = document.getElementById("text-shadow-color");
    const copyCssBtn = document.getElementById("copy-css");
    const generatedCssTextArea = document.getElementById("generated-css");

    // Update preview on input change
    document.querySelectorAll("input, select, textarea").forEach(input => {
        input.addEventListener("input", updatePreview);
    });

    function updatePreview() {
        preview.style.fontFamily = fontFamily.value;
        preview.style.fontSize = fontSize.value + "px";
        preview.style.fontWeight = fontWeight.value;
        preview.style.fontStyle = fontStyle.value;
        preview.style.fontVariant = fontVariant.value;
        preview.style.lineHeight = lineHeight.value;
        preview.style.color = textColor.value;
        preview.style.textAlign = textAlign.value;
        preview.style.textDecoration = textDecoration.value;
        preview.style.letterSpacing = letterSpacing.value + "px";
        preview.style.wordSpacing = wordSpacing.value + "px";
        preview.style.textIndent = textIndent.value + "px";
        preview.style.textTransform = textTransform.value;
        preview.style.textShadow = `${textShadowH.value}px ${textShadowV.value}px ${textShadowBlur.value}px ${textShadowColor.value}`;

        preview.innerText = textInput.value;

        generateCss();
    }

    // Generate CSS code based on preview styles
    function generateCss() {
        generatedCssTextArea.value = `
            font-family: ${fontFamily.value};
            font-size: ${fontSize.value}px;
            font-weight: ${fontWeight.value};
            font-style: ${fontStyle.value};
            font-variant: ${fontVariant.value};
            line-height: ${lineHeight.value};
            color: ${textColor.value};
            text-align: ${textAlign.value};
            text-decoration: ${textDecoration.value};
            letter-spacing: ${letterSpacing.value}px;
            word-spacing: ${wordSpacing.value}px;
            text-indent: ${textIndent.value}px;
            text-transform: ${textTransform.value};
            text-shadow: ${textShadowH.value}px ${textShadowV.value}px ${textShadowBlur.value}px ${textShadowColor.value};
        `;
    }

    // Copy generated CSS code to clipboard
    copyCssBtn.addEventListener("click", function () {
        generatedCssTextArea.select();
        document.execCommand("copy");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const preview = document.getElementById("preview");
    const textInput = document.getElementById("text-input");
    const fontFamily = document.getElementById("font-family");
    const fontSize = document.getElementById("font-size");
    const fontWeight = document.getElementById("font-weight");
    const fontStyle = document.getElementById("font-style");
    const fontVariant = document.getElementById("font-variant");
    const lineHeight = document.getElementById("line-height");
    const textColor = document.getElementById("text-color");
    const textAlign = document.getElementById("text-align");
    const textDecoration = document.getElementById("text-decoration");
    const letterSpacing = document.getElementById("letter-spacing");
    const wordSpacing = document.getElementById("word-spacing");
    const textIndent = document.getElementById("text-indent");
    const textTransform = document.getElementById("text-transform");
    const textShadowH = document.getElementById("text-shadow-h");
    const textShadowV = document.getElementById("text-shadow-v");
    const textShadowBlur = document.getElementById("text-shadow-blur");
    const textShadowColor = document.getElementById("text-shadow-color");
    const copyCssBtn = document.getElementById("copy-css");
    const generatedCssTextArea = document.getElementById("generated-css");

    // Update preview on input change
    document.querySelectorAll("input, select, textarea").forEach(input => {
        input.addEventListener("input", updatePreview);
    });

    function updatePreview() {
        preview.style.fontFamily = fontFamily.value;
        preview.style.fontSize = fontSize.value + "px";
        preview.style.fontWeight = fontWeight.value;
        preview.style.fontStyle = fontStyle.value;
        preview.style.fontVariant = fontVariant.value;
        preview.style.lineHeight = lineHeight.value;
        preview.style.color = textColor.value;
        preview.style.textAlign = textAlign.value;
        preview.style.textDecoration = textDecoration.value;
        preview.style.letterSpacing = letterSpacing.value + "px";
        preview.style.wordSpacing = wordSpacing.value + "px";
        preview.style.textIndent = textIndent.value + "px";
        preview.style.textTransform = textTransform.value;
        preview.style.textShadow = `${textShadowH.value}px ${textShadowV.value}px ${textShadowBlur.value}px ${textShadowColor.value}`;

        preview.innerText = textInput.value;

        generateCss();
    }

    // Generate CSS code based on preview styles
    function generateCss() {
        generatedCssTextArea.value = `
            font-family: ${fontFamily.value};
            font-size: ${fontSize.value}px;
            font-weight: ${fontWeight.value};
            font-style: ${fontStyle.value};
            font-variant: ${fontVariant.value};
            line-height: ${lineHeight.value};
            color: ${textColor.value};
            text-align: ${textAlign.value};
            text-decoration: ${textDecoration.value};
            letter-spacing: ${letterSpacing.value}px;
            word-spacing: ${wordSpacing.value}px;
            text-indent: ${textIndent.value}px;
            text-transform: ${textTransform.value};
            text-shadow: ${textShadowH.value}px ${textShadowV.value}px ${textShadowBlur.value}px ${textShadowColor.value};
        `;
    }

    // Copy generated CSS code to clipboard
    copyCssBtn.addEventListener("click", function () {
        generatedCssTextArea.select();
        document.execCommand("copy");
    });

    // Initialize preview and generated CSS
    updatePreview();
});
