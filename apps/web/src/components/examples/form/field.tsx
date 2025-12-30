import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	Fieldset,
	FieldsetDescription,
	FieldsetLegend,
	Input,
} from "@/components/ui";

export const FieldExample = () => {
	return (
		<div style={{ display: "grid", gap: 18, maxWidth: 300 }}>
			<FieldGroup>
				<Field>
					<FieldLabel>First Name</FieldLabel>
					<Input placeholder="First Name" />
					<FieldDescription>Please enter your first name.</FieldDescription>
				</Field>

				<Field disabled>
					<FieldLabel>Disabled</FieldLabel>
					<Input placeholder="First Name" />
					<FieldDescription>Please enter your first name.</FieldDescription>
				</Field>
			</FieldGroup>

			<Field invalid>
				<FieldLabel>Error</FieldLabel>
				<Input placeholder="First Name" />
				<FieldDescription>Please enter your first name.</FieldDescription>
				<FieldError>This field is required.</FieldError>
			</Field>

			<Fieldset>
				<FieldsetLegend>Personal Information</FieldsetLegend>
				<FieldsetDescription>
					Please provide your personal information.
				</FieldsetDescription>

				<FieldGroup>
					<Field>
						<FieldLabel>First Name</FieldLabel>
						<Input placeholder="First Name" />
						<FieldDescription>Please enter your first name.</FieldDescription>
					</Field>

					<Field>
						<FieldLabel>Last Name</FieldLabel>
						<Input placeholder="Last Name" />
						<FieldDescription>Please enter your last name.</FieldDescription>
					</Field>
				</FieldGroup>
			</Fieldset>
		</div>
	);
};
