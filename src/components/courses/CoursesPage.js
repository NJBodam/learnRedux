import React from "react";
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseAction'
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
    state = {
        course: {
            title: ""
        }
    }

    handleChange = event => {
        const course = {...this.state.course, title: event.target.value};
        this.setState({course: course})
    }
    handleSubmit = event => {
        event.preventDefault();
        // called create course action from courseActions to replace the alert
        this.props.dispatch(
          courseActions.createCourse(this.state.course)
        );
       // alert(this.state.course.title);
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    // request only the data that your project needs to prevent re-render
    courses: state.courses
  }
}

// function mapStateToProps(state) {
//   return {
//     courses:
//       state.authors.length === 0
//         ? []
//         : state.courses.map((course) => {
//             return {
//               ...course,
//               authorName: state.authors.find((a) => a.id === course.authorId)
//                 .name,
//             };
//           }),
//     authors: state.authors,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
//       loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
//     },
//   };
// }

export default connect(mapStateToProps)(CoursesPage);
