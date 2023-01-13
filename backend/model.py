class Experience:
    def __init__(self, id, role, company, type, location, logo, start_date, end_date, desc, tech) -> None:
        self.id = id
        self.role = role
        self.company = company
        self.type = type
        self.location = location
        self.logo = logo
        self.start_date = start_date
        self.end_date = end_date
        self.desc = desc
        self.tech = tech 


class Bio:
    def __init__(self, id, bio) -> None:
        self.id = id
        self.bio = bio


class Projects:
    def __init__(self, id, title, desc, link) -> None:
        self.id = id
        self.title = title
        self.desc = desc
        self.link = link

class Photo:
    def __init__(self, id, photo_name, photo_url) -> None:
        self.id = id
        self.photo_name = photo_name
        self.photo_url = photo_url

    
class Links:
    def __init__(self, id, name, link) -> None:
        self.id = id
        self.name = name
        self.link = link