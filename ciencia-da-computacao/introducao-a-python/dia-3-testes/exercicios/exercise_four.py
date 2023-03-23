from exercise_three import is_valid_email


def validate_email_list(emails):
    valid_emails = []
    for email in emails:
        try:
            is_valid_email(email)
        except ValueError as exc:
            print(exc)
        else:
            valid_emails.append(email)
    return valid_emails
