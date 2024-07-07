// src/static/js/app.js
const e = React.createElement;

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [], title: '', description: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/get')
            .then(response => response.json())
            .then(tasks => this.setState({ tasks }));
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, description } = this.state;
        fetch('/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        })
        .then(response => response.text())
        .then(message => {
            console.log(message);
            this.componentDidMount();
        });
    }

    render() {
        return e('div', null,
            e('h1', null, 'Todo List'),
            e('form', { onSubmit: this.handleSubmit },
                e('input', {
                    type: 'text',
                    name: 'title',
                    value: this.state.title,
                    onChange: this.handleChange,
                    placeholder: 'Title'
                }),
                e('textarea', {
                    name: 'description',
                    value: this.state.description,
                    onChange: this.handleChange,
                    placeholder: 'Description'
                }),
                e('button', { type: 'submit' }, 'Add Task')
            ),
            e('ul', null, this.state.tasks.map(task =>
                e('li', { key: task.id }, task.title)
            ))
        );
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(TodoApp), domContainer);
