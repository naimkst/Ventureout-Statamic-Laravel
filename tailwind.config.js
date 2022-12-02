module.exports = {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        darkMode: 'class',
        container: {
            center: true,
            padding: {
                DEFAULT: '0.625rem',
                md: '1rem',
                lg: '1rem',
            },
            screens: {
                sm: '100%',
                md: '100%',
                lg: '100%',
                xl: '1340px',
            },
        },
        extend: {
            fontFamily: {
                permanent: 'permanent-marker, sans-serif',
                gordita: 'gordita, sans-serif',
                neo: 'neotech, sans-serif',
            },
            colors: {
                blue: {
                    900: '#1C2731',
                    700: '#243746',
                    DEFAULT: '#51718B',
                    300: '#90ACC2',
                },
                orange: {
                    600: '#28C770',
                    DEFAULT: '#FB5856',
                },
                mango: {
                    DEFAULT: '#FE9B46',
                    300: '#FBB152',
                },
                pearl: '#F7F9FE',
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
