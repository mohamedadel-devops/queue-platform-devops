variable "aws_region" { type = string }
variable "env_name"   { type = string } # staging | production

variable "instance_type" { type = string }
variable "ami_id"        { type = string }

variable "ssh_key_name"     { type = string }
variable "allowed_ssh_cidr" { type = string }

variable "api_port" { type = number } # 3001

