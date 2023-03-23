from exercise_four import validate_email_list


def test_passing_empty_list():
    assert validate_email_list([]) == []


def test_valid_emails():
    assert validate_email_list(
        ["teste25@test.com", "teste48@gmail.com"]
    ) == ["teste25@test.com", "teste48@gmail.com"]


def test_invalid_emails_should_be_filtered():
    emails = ["inv*alid@website.com"]
    expected_emails = []
    assert validate_email_list(emails) == expected_emails


def test_valid_and_invalid_emails_returns_only_valids():
    emails = ["username@website.com", "inv*alid@website.com"]
    expected_emails = ["username@website.com"]
    assert validate_email_list(emails) == expected_emails
