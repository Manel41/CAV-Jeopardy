def Var (x):
    L=[15,18,20,25,30,40]
    E=[10,5,13,4,6,2]
    S=0
    N=0
    for k in range (0,6):
        N=N+E[k]
        S=S+E[k]*(L[k]-x)**2
    R=S/N
    return R

print(Var(16))
print(Var(18))
print(Var(19.5))
print(Var(21.5))
print(Var(33))