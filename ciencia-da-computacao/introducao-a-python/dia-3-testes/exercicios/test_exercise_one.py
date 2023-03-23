import pytest
from exercise_one import fizz_buzz


def test_fizz_buzz_passing_15():
    assert fizz_buzz(15) == [
        1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7,
        8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz',
        ]


def test_fizz_buzz_passing_3():
    assert fizz_buzz(3) == [1, 2, 'Fizz']


def test_fizz_buzz_passing_5():
    assert fizz_buzz(5) == [1, 2, 'Fizz', 4, 'Buzz']


def test_fizz_buzz_passing_string_in_values():
    with pytest.raises(
        TypeError, match='''type string is not valid to this operation'''
    ):
        fizz_buzz('3')
