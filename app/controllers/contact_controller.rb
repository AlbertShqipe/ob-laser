class ContactController < ApplicationController
  def send_email
    fields = contact_params
    missing_fields = fields.select { |k, v| v.blank? }.keys

    if missing_fields.empty?
      ContactMailer.contact_email(
        fields[:name],
        fields[:email],
        fields[:phone],
        fields[:company],
        fields[:city],
        fields[:message]
      ).deliver_now
      ContactMailer.confirmation_email(fields[:name], fields[:email]).deliver_now(wait: 1.second)
      flash[:notice] = "Email inviata con successo! Ti abbiamo inviato una conferma via email."
    else
      flash[:alert] = "Assicurati di compilare tutti i campi richiesti: #{missing_fields.join(', ')}"
    end

    redirect_back(fallback_location: root_path)
  end

  private

  def contact_params
    params.permit(:name, :email, :phone, :company, :city, :message)
  end
end
