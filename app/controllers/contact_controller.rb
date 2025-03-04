class ContactController < ApplicationController
  def send_email
    # Ensure required params are present
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    company = params[:company]
    city = params[:city]
    message = params[:message]

    if name.present? && email.present? && message.present? && company.present? && city.present? && city.present?
      # Use ActionMailer to send the email
      ContactMailer.contact_email(name, email, phone, company, city, message).deliver_now
      flash[:notice] = "Email inviata con successo!"
    else
      flash[:alert] = "Assicuratevi di riempire tutti i campi."
    end
  end
end
