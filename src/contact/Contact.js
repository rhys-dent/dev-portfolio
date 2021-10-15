import emailjs from "emailjs-com";
import PageTitle from "../common/PageTitle";

export default function () {
	return (
		<div>
			<PageTitle text="Contact" />
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log("sending email");
					emailjs
						.sendForm(
							"service_u3dr8kd",
							"template_hmnv7af",
							e.target,
							"user_hXe0OrmEMYraO9iuCTYUr"
						)
						.then(
							(result) => {
								console.log(result.text);
							},
							(error) => {
								console.log(error.text);
							}
						)
						.then(() => {
							e.target.reset();
						});
				}}
			>
				<input
					type="text"
					placeholder="Name"
					name="from_name"
					id="from_name"
					required
				/>
				<input type="text" placeholder="Email" required />

				<input type="text" placeholder="Subject" name="subject" required />
				<br />
				<textarea cols="120" rows="10" name="message" required></textarea>
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}
