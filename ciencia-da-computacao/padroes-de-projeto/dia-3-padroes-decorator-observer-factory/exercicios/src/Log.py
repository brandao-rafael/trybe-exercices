ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogError:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERMELHO}{message}{RESET}"


class LogWarning:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{LARANJA}{message}{RESET}"


class LogSuccess:
    def __init__(self, log):
        self.log = log

    def dispara_log(self, message):
        return f"{VERDE}{message}{RESET}"


if __name__ == "__main__":
    error_log = LogError(Log)
    warning_log = LogWarning(Log)
    success_log = LogSuccess(Log)

    print(error_log.dispara_log("error"))
    print(warning_log.dispara_log("warning"))
    print(success_log.dispara_log("success"))
