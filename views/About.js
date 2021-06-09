import React from 'react'
import {connect} from 'react-redux'

const About = (props) => {
    if(!props.loginStatus){
        return(
            <Alert variant='danger'>
                Please Login with correct credentials
            </Alert>
        )}
        else if(props.loginStatus){
            return (
                <div className="text-center">
                    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                        <header className="masthead mb-auto">
                            <div className="inner">
                            </div>
                        </header>
        
                        <main role="main" className="inner cover">
                            <h1 className="cover-heading">About us.</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna metus, auctor vel urna vitae, luctus blandit turpis. Pellentesque id odio non purus ullamcorper dictum rutrum tempus neque. Nulla commodo elit auctor, fringilla nibh et, consequat nibh. Vivamus egestas, tellus ut commodo pulvinar, mauris felis bibendum massa, eu iaculis est neque non lacus. Nam neque metus, tincidunt eu feugiat quis, lobortis sit amet magna. Donec nec arcu auctor, mattis nulla vel, pulvinar velit.
                                Mauris scelerisque orci nulla, sit amet venenatis diam sodales eget. Maecenas magna dolor,
                                pharetra ut augue nec, pellentesque auctor nibh. Phasellus a blandit justo, a efficitur sapien. Ut maximus ligula sed tortor rutrum, et faucibus lectus venenatis. Fusce imperdiet quam sit amet mi posuere, vel imperdiet felis bibendum. Nulla justo metus, commodo posuere urna ut, faucibus pulvinar risus. Proin finibus vitae nisl eget aliquet. Proin velit tellus, finibus a egestas sed, condimentum quis nunc. Curabitur sit amet fermentum eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse potenti. Ut erat ex, posuere ut hendrerit tristique, aliquet vitae nibh. Donec a tristique nunc. Maecenas eget nibh et est lacinia facilisis. Sed pharetra dui eu tristique dictum. Praesent maximus dolor vitae viverra varius. Donec elementum eros eget pulvinar convallis. Integer ut suscipit tellus, non pharetra eros. Mauris nec nisl massa. Etiam in magna rutrum ipsum sodales tincidunt. Nullam ornare orci ac sapien dapibus, a accumsan mi pellentesque. Ut in nunc nec magna tristique sodales a ut massa. Duis in lectus eu ligula ullamcorper vehicula.
                                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tincidunt ex eu felis pharetra dictum. Sed cursus sapien purus, a vestibulum sem pretium eu. Etiam a augue imperdiet odio volutpat tempus eget vestibulum libero. Nunc aliquam tellus non nisl feugiat mollis. Nulla facilisi. Nam rutrum ante eu nisl dapibus pellentesque. Duis faucibus suscipit metus ac placerat. Curabitur id mattis nunc. Quisque enim orci, aliquet pharetra suscipit ut, bibendum sed turpis. Donec sagittis erat quis arcu accumsan placerat.</p>
                            <p className="lead">
                            <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                            </p>
                        </main>
        
                        <footer className="mastfoot mt-auto">
                            <div className="inner">
                            </div>
                        </footer>
                        </div>
        
                </div>
            )
        }
    
    
}
const mapStateToProps = (state) => {
    return {
      loginStatus: state.loginStatus,
      rEmail:state.email,
      rPassword:state.password
    }
}
export default connect(mapStateToProps)(About)
