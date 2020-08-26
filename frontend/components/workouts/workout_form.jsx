import React from 'react'; 

class WorkoutForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            user_id: this.props.user_id, 
            time_elapsed: this.props.time_elapsed, 
            description: this.props.description, 
            activity_type: this.props.activity_type, 
            route_id: this.props.route_id, 
            id: this.props.id
        } 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.update = this.update.bind(this); 
        this.updateInteger = this.updateInteger.bind(this); 
    }

    componentDidMount() { 
        this.props.fetchRoutes(this.props.user_id); 
    }

    handleSubmit(e) {
            e.preventDefault();  
            this.props.action(this.state).then(result => {
                let that = this; 
                that.props.history.push('/workouts'); 
            }); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    updateInteger(field) {
        return e => this.setState({ [field]: parseInt(e.currentTarget.value) })
    }



    render () {
        
        let routeOptions = Object.values(this.props.routes);
       
        let routeSelector = routeOptions.length > 0 ? (
            <label className="form-label" >Route:
                <br/> 
                <select name="route-id" id="route-id" className="input-field form-dropdown" value={this.state.route_id} onChange={this.updateInteger('route_id')}>
                    <option value="null">Select Route(optional)</option> 
                    {routeOptions.map((route, idx)=> <option value={route.id} key={idx}>{route.name}</option>)}
                </select>
            </label>
        ) : (
            <label className="form-label">Route: 
                <br/> 
                <div>Please create a route!</div>
            </label>
        );
        return (
            <div className="form-background">
                <br/> 
                <br/> 
                <br/> 
                <div className="form-container">
                    <h1 className="form-type">{this.props.formType}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label className="form-label">Activity Type: 
                            <br/> 
                            <select name="activity-type" id="activity-type" className="input-field form-dropdown" value={this.state.activity_type} onChange={this.update('activity_type')}>
                                <option value="Running">Running</option>
                                <option value="Cycling">Cycling</option>
                                <option value="Hiking">Hiking</option>
                                <option value="Yoga">Yoga</option>
                                <option value="Strength Training">Strength Training</option>
                            </select>
                        </label>
                        <br/> 
                        <label className="form-label">Description: 
                            <br/> 
                            <textarea className="input-field" value={this.state.description} onChange={this.update("description")} cols="30" rows="10" placeholder="How'd it go?"></textarea>
                        </label>
                        <br/>
                        {routeSelector} 
                        <br/> 
                        <label className="form-label">Duration(minutes):
                            <br/> 
                            <input type="number" className='input-field' value={this.state.time_elapsed} onChange={this.updateInteger("time_elapsed")}/>
                        </label>
                        <br/> 
                        <button type="submit" className="session-button" id="submit-session">{this.props.formType}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default WorkoutForm; 