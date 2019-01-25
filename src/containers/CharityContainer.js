import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DonationsComponent from "../components/DonationsComponent";
import * as actions from "../actions/charityActions";


function mapStateToProps({charity}) {
	return {
		...charity
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationsComponent);