class ContactController < ApplicationController
  def send_email
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    company = params[:company]
    city = params[:city]
    message = params[:message]

    if name.present? && email.present? && message.present? && company.present? && city.present?
      ContactMailer.contact_email(name, email, phone, company, city, message).deliver_now
      ContactMailer.confirmation_email(name, email).deliver_now

      flash[:notice] = "Email inviata con successo! Ti abbiamo inviato una conferma via email."
    else
      flash[:alert] = "Assicuratevi di riempire tutti i campi."
    end

    redirect_back(fallback_location: root_path)
  end
end
