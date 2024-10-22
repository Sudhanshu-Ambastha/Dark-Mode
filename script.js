const themes = {
            lightMode: {
                bgColor: "white",
                textColor: "black",
            },
            darkMode: {
                bgColor: "black",
                textColor: "white",
            }
        };

        const themeToggleCheckbox = document.getElementById('themeToggleCheckbox');

        function applyTheme(theme) {
            document.body.style.backgroundColor = theme.bgColor;
            document.body.style.color = theme.textColor;
        }

        let currentTheme = "lightMode";
        applyTheme(themes[currentTheme]);

        themeToggleCheckbox.addEventListener('change', () => {
            currentTheme = themeToggleCheckbox.checked ? "darkMode" : "lightMode";
            applyTheme(themes[currentTheme]);
        });