import { gActions } from '../gActions'
import { gSelectors } from '../gSelectors'
import withState from 'react-pure'

const initialState = {
	firstName: 'Grant',
	lastName: 'Lonie',
}

const App = withState(
	{ drink: gSelectors.getFavoriteDrink, food: gSelectors.getFavoriteFood },
	((state = initialState),
	(action, payload) => {
		switch (action) {
			case 'first':
				return { ...state, firstName: payload }
			case 'last':
				return { ...state, lastName: payload }
		}
	})
)(props => {
	const {
		lState: { firstName, lastName },
		lAction,
		gState: { drink, food },
		gAction,
	} = props

	const handleLocalChange = ({ target }) => {
		lAction(target.name, target.value)
	}

	return (
		<div>
			<div>
				<h5>Local State examples</h5>
				First Name: <input type="text" name="first" value={firstName} onChange={handleLocalChange} />
				Last Name: <input type="text" name="last" value={lastName} onChange={handleLocalChange} />
			</div>

			<div>
				<h5>Global State examples</h5>
				<p>Favorite Drink:</p>
				<input type="radio" value="coffee" />
			</div>
		</div>
	)
})
