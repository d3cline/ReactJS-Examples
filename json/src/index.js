import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json:null,
    };
  this.doesThisMatter = this.doesThisMatter.bind(this);
  }

  doesThisMatter(i) {
axios.get('https://jsonplaceholder.typicode.com/posts/'+i)
  .then(response => {
 const json = response.data;
 this.setState({ json: json.body });
  })
  .catch(error => {
  });
}

  render() {
const moves = this.state.json;
    return (
      <div>
        <div className="board-row">
          {moves}
        </div>
        <p>foo</p>
            <Button color="danger" onClick={() => this.doesThisMatter(1)}>JSON!</Button>
      </div>
    );
  }
}

//=====================

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);





