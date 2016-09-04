class User < ActiveRecord::Base
  ROLES = {
      regular: 1,
      manager: 5,
      admin: 10
  }

  acts_as_api
  acts_as_token_authenticatable
  devise :trackable
  has_many :jogs

  api_accessible :v1_default do |t|
    t.add :id
    t.add :name
    t.add :email
    t.add :image
    t.add :role
    t.add :role_name
    t.add :jogs_count
  end

  api_accessible :v1_with_credentials_and_acl, extend: :v1_default do |t|
    t.add :credentials
    t.add :acl
  end

  def self.find_or_create_for_oauth(auth)
    where(auth.slice(:provider, :uid).to_h).first_or_initialize.tap do |user|
      if user.new_record?
        user.provider = auth[:provider]
        user.uid = auth[:uid]
        user.email = user.uid.to_s + '@' + user.provider
        user.name = auth[:info][:name]
        user.image = auth[:info][:image]
      end

      user.save!
    end
  end

  def self.find_or_create_for_facebook(uid, name)
    hash = {
        provider: 'facebook',
        uid: uid,
        info: {
            name: name,
            image: "https://graph.facebook.com/v2.3/#{uid}/picture?width=200",
        }
    }

    self.find_or_create_for_oauth(hash)
  end

  def manager?
    role >= ROLES[:manager]
  end

  def admin?
    role >= ROLES[:admin]
  end

  def can_manage_jog?(jog)
    jog.user == self || admin?
  end

  def can_manage_user?(user)
    manager?
  end

  def role_name
    ROLES.invert[role].to_s.humanize
  end

  def jogs_count
    jogs.count
  end

  def credentials
    {
        email: email,
        token: authentication_token
    }
  end

  def acl
    {
        can_manage_users: manager?,
        can_manage_jogs: admin?
    }
  end
end
