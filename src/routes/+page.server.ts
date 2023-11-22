import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/emailService";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
	default: async ({ request }) => {
		const formdata = await request.formData()
		const body = formdata.get('body')?.toString()
		console.log('recived', body)

		const message = {
			from: GOOGLE_EMAIL,
			to: 'dia.mollo.bruno@gmail.com',
			subject: 'test',
			text: body,
		};

		transporter.sendMail(message)
			.then(() => console.log('nice'))
			.catch(() => console.log('ups'))
	}
}
