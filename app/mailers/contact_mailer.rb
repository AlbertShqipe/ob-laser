class ContactMailer < ApplicationMailer
  default to: "ob.group22@icloud.com" # This is the email address that the contact form will be sent to

  def contact_email(name, email, phone, company, city, message)
    @name = name
    @email = email
    @phone = phone
    @company = company
    @city = city
    @message = message

    mail(
      from: 'no-reply@oblaser.com',
      subject: "Nuovo Messaggio da #{@name}, #{@email}",
      bcc: "albert_nikolli@icloud.com"
    )
  end
end
