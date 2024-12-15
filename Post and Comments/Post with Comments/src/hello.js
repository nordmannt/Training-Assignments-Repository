const Hello = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
          Post to the Family Blog by {props.name} {props.lastname}
        </h2>
        <p style={{  border: '1px solid #ddd',  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',lineHeight: '1.6', padding: '20px',fontSize: '18px', maxWidth: '700px',marginBottom: '100px'  }}>
          Hey everyone! Its almost Christmas and I need to do some Christmas shopping.
          
          Can everyone PLEASE update their Christmas lists here on the family blog site?
          
          Merry Christmas!!
        </p>
      </div>
    );
  };
  
  export default Hello;