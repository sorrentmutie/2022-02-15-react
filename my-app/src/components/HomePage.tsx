export const HomePage = () => {
    const gender: string = 'F';
    const wrapperClass: string = gender === 'M' ? 'App-male' : 'App-female';  
    return (
    <header className="App-header">
       <div className={wrapperClass}>
         You are {gender === 'M' ? 'male': 'female'}
       </div>
       <div className="badge bg-primary" style={ {color: 'white'}}>Prova</div>
      </header>
    );
}