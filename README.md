# clean-node-api

# Instalação do lint-staged: Permite que seja realizado uma validação nos arquivos antes do commit.

# "lint-staged":{

# "\*.js":[

# "standard --fix",

# "git add"

# ]

# }

# toda vez que o lint-staged for utilizado, será aplicado o padrão standard nos arquivos.

# O --fix tenta consertar o problema. Ao alterar ele joga para a unstaged area, sendo necessário executar o git add.

# Husky: Permit a execução de hooks (scripts) antes de acontecer um commit.

# "husky": {

# "pre-commit": "lint-staged"

# }

# Toda vez que for realizado um commit, será disparado antes o lint-stage, que verificar se os arquivos seguem o padrão do standard.
