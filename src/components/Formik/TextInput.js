import React from 'react';
import { useField } from 'formik';

export const TextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			
				<input  
			        				
			        {...field}
			        {...props}
				/>
					
		</>
	)
} 