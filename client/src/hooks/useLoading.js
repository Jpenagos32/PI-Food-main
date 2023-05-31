import { useState, useEffect } from 'react';

export const useLoading = (dispatch, action, actionParam = null) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const fetch = async () => {
			await dispatch(action(actionParam));
			setLoading(false);
		};

		fetch();
	}, [actionParam, dispatch]);

	return loading;
};
