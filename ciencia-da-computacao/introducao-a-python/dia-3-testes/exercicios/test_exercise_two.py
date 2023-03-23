import pytest
from exercise_two import decode_number_by_expression


def test_decode_number_passing_correct_expression():
    assert decode_number_by_expression(
        '1-HOME-SWEET-HOME'
    ) == '1-4663-79338-4663'


def test_decode_number_passing_correct_expression_with_no_number():
    assert decode_number_by_expression(
        'MY-MISERABLE-JOB'
    ) == '69-647372253-562'


def test_decode_number_passing_empty_string():
    with pytest.raises(
        ValueError, match='''incorrect length'''
    ):
        decode_number_by_expression('')


def test_decode_number_passing_to_long_string():
    with pytest.raises(
        ValueError, match='''incorrect length'''
    ):
        decode_number_by_expression('ABCDEFGHIJKLMNOPQRSTUWVXYZWERRTGFDDFG')
