import React, {Component} from 'react';
import '../App.css'
import axios from 'axios';
import  { Redirect  } from 'react-router-dom'


class Index extends Component{

    constructor(props) {
        super(props);

        this.state = {
            fork_users: []
        }
    };

    componentDidMount(){
        axios.get('https://api.github.com/repos/facebook/react/forks')
        .then(resp => {
            const fork_users = resp.data;
            this.setState({fork_users})
        })
        .catch(error => {
            window.location.href = "http://localhost:3000/error";
        })
    }


    follow = event =>{
        event.preventDefault();
        console.log("function called");
        var session_url = 'http://localhost:5000/follow';
        const input = event.target.querySelector('input')
        const username = input.value;

        axios({
            method: 'post',
            url: session_url,
            data: {user: username}
          }).then(function(response) {
              console.log("redirecting")
            //   this.props.history.push("/success");
              window.location.href = "http://localhost:3000/success";
          })
          .catch(function(error) {
            console.log('Not Working')
            window.location.href = "http://localhost:3000/error";
          });

       
    }


    render() {
        
        return (
            <div className="App">
                <h4 class="text-center my-5">List of all forks of user: user and repo: repo</h4> 
                    <div class="page-content page-container mt-0" id="page-content">
                        <div class="padding">
                            <div class="row">
                                <div class="col-12">
                                    <div class="list list-row block">
                                        <inout type="/hidden" value="hi there"></inout>

                                            {this.state.fork_users.map(user =>
                                                <form onSubmit={this.follow}>
                                                    <div class="list-item" data-id="19">
                                                        <div><a href="#" data-abc="true"><span className="w-48 avatar gd-warning">{ user.owner.login[0] }</span></a></div>
                                                            <div className="flex"> <a href="#" className="item-author text-color name" data-abc="true">{ user.owner.login }</a>
                                                            <div className="item-except text-muted text-sm h-1x">A user who forked facebook repo from of user react </div>
                                                        </div>
                                                        <input type="hidden" value= { user.owner.login }/>
                                                        <button type="submit" className="btn btn-dark text-light follow ml-auto">+ follow</button>
                                                    </div>
                                                </form>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }

}

export default Index;