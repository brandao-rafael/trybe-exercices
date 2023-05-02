import pytest
from exercise_three import is_valid_email


def test_a_valid_email():
    assert is_valid_email(
        'rafaelBrandao1992@gmail.com'
    )


def test_a_invalid_username():
    with pytest.raises(
        ValueError, match='''email is invalid'''
    ):
        is_valid_email('2rafael@gmail.com')


def test_a_invalid_domain():
    with pytest.raises(
        ValueError, match='''email is invalid'''
    ):
        is_valid_email('rafaelbrandao1992@g*il.com')


def test_a_invalid_extension():
    with pytest.raises(
        ValueError, match='''email is invalid'''
    ):
        is_valid_email('rafaelbrandao1992@gmail.cama')
