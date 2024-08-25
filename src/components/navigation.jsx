import * as React from 'react';

function Navigation() {
  const css = {
    
    navContainer: {
      // position: 'fixed',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',  // Aligns items to the right
      backgroundColor: 'white',
    },
    ul: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',  // Flexbox for horizontal layout
      
    },
    li: {
      marginLeft: '20px',  // Space between the items
    },
    a: {
   
      display: 'block',
      color: '#525252',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
    },
    aHover: {
      color: '#FFA9A9',
    },
  };

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section id='navbar'>
    <div id="nav" style={css.navContainer}>
      <ul style={css.ul}>
        {['Home', 'About', 'Works', 'Contact'].map((text, index) => (
          <li key={text} style={css.li}>
            <a
              href={`#${text}`}
              style={{
                ...css.a,
                ...(hoveredIndex === index ? css.aHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default Navigation;
