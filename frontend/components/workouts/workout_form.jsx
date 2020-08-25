import React from 'react'; 

class WorkoutForm extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            userId: props.userId, 
            timeElapsed: props.timeElapsed, 
            description: props.description, 
            averagePace: props.averagePace, 
            activityType: props.activityType, 
            route_id: null, 
        }
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.update = this.update.bind(this); 
       
    }

    componentDidMount() { 
        this.props.fetchRoutes(this.props.userId); 
    }

    handleSubmit(e) {
        debugger; 
        e.preventDefault(); 
        this.props.action(this.state); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }


    render () {
        return (
            <div className="workout-form">
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Activity Type: 
                        <select name="activity-type" id="activity-type" value={this.state.activityType} onChange={this.update('activityType')}>
                            <option value="Running">Running</option>
                            <option value="Cycling">Cycling</option>
                            <option value="Hiking">Hiking</option>
                            <option value="Yoga">Yoga</option>
                            <option value="Strength Training">Strength Training</option>
                        </select>
                    </label>
                    <label>Description: 
                        <textarea value={this.state.description} onChange={this.update("description")} cols="30" rows="10" placeholder="How'd it go?"></textarea>
                    </label>
                    <label>Duration(minutes):
                        <input type="number" value={this.state.timeElapsed} onChange={this.update("timeElapsed")}/>
                    </label>
                    <button type="submit" className="session-button">{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default WorkoutForm; 