import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post('http://localhost:3001/authenticate',
      {username: value}
      )
      .then (r => props.onAuth({ ...r.data, secret:value }))
      .catch(e => console.log('error',e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title"> Dialogos Chat</div>
  
          <div className="form-subtitle">Ready to explore? Pick a username to embark on your quest!</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter
            </button>
          </div>
        </form>
        <div madeby="form-subtitle"> Made by:  Kaleb Befekadu </div>
      </div>
    );
  };
  
  export default AuthPage;