# 🚀 Exercício 3 Faça uma função que valide um e-mail,
# lançando uma exceção quando o valor for inválido.
# Endereços de e-mail válidos devem seguir as seguintes regras:


import re


def is_valid_email(email):
    regex = r'^[a-zA-Z][\w-]*@[a-zA-Z0-9]+\.[a-zA-Z]{1,3}$'
    if re.match(regex, email):
        return True
    raise ValueError('''email is invalid''')


print(is_valid_email('rafaelBrandao1992@gmail.com'))
