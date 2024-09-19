# Função para calcular a idade humana do animal
def calcular_idade_humana(idade_animal):
    return idade_animal * 7

# Bem-vindo à calculadora
print("Bem-vindo a calculadora da idade do seu Pet!")

# Solicitar a idade do animal
idade_animal = int(input("Digite a idade de seu animal (cachorro ou gato): "))

# Calcular a idade humana
idade_humana = calcular_idade_humana(idade_animal)

# Exibir o resultado
print(f"Se o seu animal fosse humano ele teria: {idade_humana} anos!")