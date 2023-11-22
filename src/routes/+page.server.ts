import { sendEmail } from "$lib/emailService";
import { fail, type Actions } from "@sveltejs/kit";
import { error } from "console";

export const actions: Actions = {
	default: async ({ request }) => {
		const formdata = await request.formData()
		const body = formdata.get('body')?.toString()
		const to = formdata.get('to')?.toString()


		if (!body || !to) {
			return fail(400, { missingBody: !body, missingTo: !to })
		}

		try {
			await sendEmail({
				from: { name: "Bruno Mollo", address: "something@gmail.com" },
				to,
				subject: "Testing email",
				text: body
			})
			return { sended: true, to }

		} catch (err) {
			throw error(500, 'could not send email')
		}


	}
}
